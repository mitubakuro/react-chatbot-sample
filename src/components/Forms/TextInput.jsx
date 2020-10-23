import React from 'react'
// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const TextInput = (props)=>{
  return(
    <TextField 
      label={props.label} 
      fullWidth={true}
      margin='normal'
      variant='outlined'
      multiline={props.multiline}
      rows={props.rows}
      value={props.value}
      type={props.type}
      onChange={props.onChange}
    />
  )
}

export default TextInput