import {Box , Grid, TextareaAutosize } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { setRecipe } from "../../../indexModles/features/preMedicalRecord/recipe"

export default function Recipe() {
    const dispatch = useDispatch()
    const x = useSelector(state => state.recipe)
    const handleX = (event) => { dispatch(setRecipe(event.target.value)) }



    return<>
        <Grid container>        
        <Grid item xs={12}><Box className = 'centrate' >
        <h4><b>Recipe</b></h4>
        </Box></Grid>

            <Grid item xs={12}>
                <div className="centrate">
                    <TextareaAutosize className="centrate" aria-label="minimum height" minRows={3} 
                    placeholder="" style={{ width: "60%" }} value={x} onChange={handleX}/>
                </div>
            </Grid>
        </Grid></>
}