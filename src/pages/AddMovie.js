import { Box, Button, Input, TextField } from "@mui/material";
import { Container } from "@mui/system";
import Protected from "../components/Protected";
import { createMovie } from "../utils/firebase";

import style from './AddMovie.module.css';

function AddMovie() {
    const handleAddMovieSubmit = (e) => {
        e.preventDefault();

        console.log('crear peli');
        createMovie('test', "director", 1990);
    }

    return <Protected>
        <Container>
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
                            id="outlined-required"
                            label="Título"
                            variant="standard"
                        />
                        <TextField
                            id="outlined-number"
                            label="Año"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="standard"
                        />
                    </div>
                    <div>
                        <TextField
                            required
                            id="outlined-required"
                            label="Director"
                            variant="standard"
                        />
                        <TextField
                            id="outlined-number"
                            label="Sinopsis"
                            variant="standard"
                            type="text"
                        />
                    </div>
                    <div>
                        <label htmlFor="contained-button-file">
                            <Input accept="image/*" id="contained-button-file" multiple type="file" />
                            <Button variant="contained" component="span">
                                Subir Imagen Portada
                            </Button>
                        </label>
                    </div>
                    <div>
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