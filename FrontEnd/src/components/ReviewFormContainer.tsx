import { Button, Dialog, DialogContent } from '@mui/material';
import React, { useState } from 'react';
import { useMedia } from 'react-use';

type Props = {
    children: JSX.Element;
};

export const ReviewFormContainer = ({ children }: Props) => {
    const isMobile = useMedia('(max-width: 480px)');
    const [openModal, setOpenModal] = useState(false);

    const renderChildren = () => {
        return React.cloneElement(children, {
            isMobile,
        });
    };

    if (isMobile) {
        return (
            <>
                <Button variant="contained" onClick={() => setOpenModal(true)} sx={{ mt: 2 }}>
                    Post Review
                </Button>
                <Dialog open={openModal} onClose={() => setOpenModal(false)}>
                    <DialogContent>{renderChildren()}</DialogContent>
                </Dialog>
            </>
        );
    }

    return <div>{renderChildren()}</div>;
}
