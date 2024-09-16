import { Box, Button, TextField, FormControl, Modal } from '@mui/material';
import { useRef, useState, memo } from 'react';
import { postMovieReview } from '../lib/api';
import { Movie } from '../lib/types';

interface Props {
    movie: Movie | undefined;
    isMobile?: boolean;
};

export const ReviewForm = memo(function ReviewForm({ movie, isMobile = false }: Props) {
    const [reviewResponse, setReviewResponse] = useState('');
    const [reviewInputError, setReviewInputError] = useState(false);
    const [helperText, setHelperText] = useState('');
    const inputElement = useRef<HTMLInputElement>()
    const reviewMaxLength = 100;

    const onSubmit = () => {
        if (inputElement.current) {
            if (inputElement.current.value.length > reviewMaxLength) {
                setReviewInputError(true);
                setHelperText(`Characters exceed Max characters of a 100 (${inputElement.current.value.length} / 100)`);
            } else {
                if (reviewInputError) {
                    setReviewInputError(false);
                    setHelperText('');
                }

                setReviewResponse('Posting review...');
                postMovieReview(inputElement.current.value)
                    .then((response) => {
                        console.log(response)
                        setReviewResponse(response.message);
                    })
                    .catch((error) => {
                        console.error(error);
                        setReviewResponse('Error posting review, please try later');
                    });
            }
        }
    }

    if (movie === undefined) {
        return (<h2>No Movie Selected</h2>)
    } else {
        return (
            <Box
                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
                <p>You have selected {movie.title}</p>
                <p>Please leave review Below</p>
                <FormControl fullWidth>
                    <TextField
                        id="review-input"
                        aria-describedby="review-input"
                        name="review"
                        label="Review"
                        variant="outlined"
                        multiline={true}
                        rows={3}
                        error={reviewInputError}
                        helperText={helperText}
                        focused
                        inputRef={inputElement}
                    />
                    <br />
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ mx: 4, my: isMobile ? 2 : 0 }}
                        onClick={onSubmit}
                    >
                        Submit
                    </Button>
                    {reviewResponse && <p>{reviewResponse}</p>}
                </FormControl>
            </Box>
        );
    }
});
