import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useSelector } from "react-redux";


export function MunicipioCrud(){
    const municipioList = useSelector(state => state.municipioList)
    const [municipio, setMunicipio] = useState(''); const handleMunicipio = (event) => { setMunicipio(event.target.value) }//MUNICIPIO
    

    useState( () => {

    }, [])

    return <Box className='modalColor centrate modalCentratedSmall'>
        <FormControl sx={{display:"flex"}}> <InputLabel>Municipios</InputLabel>
            <Select variant="filled" label="Municipios" 
            value={municipio} onChange={handleMunicipio} >
                {municipioList.map((e) => <MenuItem value={e} key={e.id + ' municipio'}>{e.nombre_municipio}</MenuItem> )}
            </Select>
        </FormControl>
    </Box>
}