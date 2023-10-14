import { TextField } from "@mui/material"
import { useState } from "react"
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import '../comp_css/Input_slab.css'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import '../comp_css/Data_show.css'

const Input_slab = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [data, setData] = useState([])

    const data_list = () => {
        setData([...data, { name: name, email: email }]);
        setName("");
        setEmail("");
    }

    const del=(index)=>{
        let arr=data;
        arr.splice(index,1);
        setData([...arr]);
    }

    return (
        <>
            <div className="stack">
                <Stack className="input_field" direction="row" spacing={2}>
                    <TextField onChange={(event) => { setName(event.target.value) }} value={name} id="outlined-basic" label="Task" variant="outlined" />
                    <TextField onChange={(event) => { setEmail(event.target.value) }} value={email} id="outlined-basic" label="Details" variant="outlined" />
                    <Button variant="contained" color="success" onClick={data_list}>
                        <AddIcon />
                    </Button>
                </Stack>
            </div>
            {
                data.map((element, index) => {
                    return (
                        <div key={index} className='show_data_outer'>
                            <div className="show_data_inner">
                                <div className="name">{element.name}</div>
                                <div className="Email">{element.email}</div>
                                <Button variant="contained" color="error" onClick={(event)=>del(index)}>
                                    <DeleteForeverIcon />
                                </Button>
                            </div>
                        </div>

                    )
                })
            }
        </>
    )
}

export default Input_slab
