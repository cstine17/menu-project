import React, {useState} from 'react';
const ExampleButton = ({ handleSubmitWithRedirect, handleSubmit, ...props }) => {
    const form = useForm();
    const notify = useNotify();
    const [open, setOpen] = useState(false);
    const handleClick = () => setOpen(true);
    const handleDialogClose = () => setOpen(false);

    const handleConfirm = () => {
        doStuff();
        notify('Stuff is done.');
        handleSubmit();
        setOpen(false);
    };

    var ct = "Do you really want to do stuff?";
    return (<><SaveButton {...props} handleSubmitWithRedirect={handleClick} handleSubmit={handleClick} variant="outlined" />
        <Confirm
            isOpen={open}
            title="do stuff"
            content={ct}
            onConfirm={handleConfirm}
            onClose={handleDialogClose}
            confirm="Yep"
            cancel="Nope"
        />
    </>);
}