import { Box, Button, Input, TextField } from "@mui/material";
import { Container } from "@mui/system";
import { useRef } from "react";
import Protected from "../components/Protected";
import { createMovie } from "../utils/firebase";
import { useSnackbar } from 'notistack';

import style from './AddMovie.module.css';
import { useNavigate } from "react-router-dom";

function AddMovie() {
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();

    const titleInputRef = useRef(null);
    const directorInputRef = useRef(null);
    const yearInputRef = useRef(null);
    const storylineInputRef = useRef(null);
    const posterInputRef = useRef(null);


    const handleAddMovieSubmit = async (e) => {
        e.preventDefault();

        const title = titleInputRef.current.value;
        const director = directorInputRef.current.value;
        const year = yearInputRef.current.value;
        const storyline = storylineInputRef.current.value;
        const poster = posterInputRef.current.value;

        console.log({ title, director, year, storyline, poster })

        await createMovie(title, director, year, storyline, poster);

        enqueueSnackbar('Película creada correctamente', { variant: 'success' });

        navigate('/peliculas');

    }

    return <Protected>
        <Container>
            <div className="agregarpelicula">
                <h3>Agregar pelicula</h3>
            </div>
            <Box
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                className={style.addMovie}
            >
                <form onSubmit={handleAddMovieSubmit}                >
                    <div>
                        <TextField
                            required
                            id="title"
                            label="Título"
                            variant="standard"
                            inputRef={titleInputRef}
                        />
                        <TextField
                            required
                            id="director"
                            label="Director"
                            variant="standard"
                            inputRef={directorInputRef}
                        />
                        <TextField
                            id="year"
                            label="Año"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="standard"
                            inputRef={yearInputRef}
                        />
                    </div>
                    <div>

                        <TextField
                            id="storyline"
                            label="Sinopsis"
                            variant="standard"
                            type="text"
                            inputRef={storylineInputRef}
                        />
                        <TextField
                            id="image"
                            label="Url de la portada"
                            variant="standard"
                            type="text"
                            inputRef={posterInputRef}
                        />
                    </div>
                    <div className="crearpelicula">
                        <Button type="submit" variant="contained">
                            Crear Película
                        </Button>
                    </div>
                </form>
            </Box>
        </Container>
    </Protected>
}

export default AddMovie;