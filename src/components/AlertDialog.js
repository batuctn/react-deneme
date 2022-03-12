import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

const AlertDialog=({handleClose,show,username,sehir,firma_ismi})=>{
    return       <div>

        <Dialog
            sx={{
                "& .MuiDialog-paper":{
                width:"500px",
                    justifyContent:"center",
                    alignItems:"center",
                    borderRadius:"50px"
                }
            }}
            open={show}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Kullanıcı Detayı"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText  id="alert-dialog-description" >
                    <TextField
                        sx={{ width:"400px" }}
                        disabled
                        id="outlined-disabled"

                        value={"Kullanıcı Adı:"+username}
                    />
                </DialogContentText>
                <DialogContentText sx={{marginBottom:"5px",marginTop:"5px"}} id="alert-dialog-description" >

                    <TextField
                        sx={{ width:"400px" }}
                        disabled
                        id="outlined-disabled"
                        value={"Şehir:"+sehir}
                    />
                </DialogContentText>
                <DialogContentText id="alert-dialog-description" >

                    <TextField
                        sx={{ width:"400px" }}
                        disabled
                        id="outlined-disabled"

                        value={"Firma:"+firma_ismi}
                    />
                </DialogContentText>
            </DialogContent>
            <DialogActions>

                <Button onClick={handleClose} autoFocus>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    </div>
}

export default AlertDialog