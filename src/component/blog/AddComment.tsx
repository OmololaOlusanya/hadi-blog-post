'use client';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { useBlogContext } from '../provider/BlogProvider';
import { FC } from 'react';

const InputFields = { text: 'text', name: 'name' } as const;
type FieldValues = { text: string; name: string };

const validationSchema = Yup.object().shape({
  [InputFields.text]: Yup.string().required('Comment is required'),
  [InputFields.name]: Yup.string(),
});

export const AddComment: FC<{ id: number }> = ({ id }) => {
  const { name, text } = InputFields;
  const { addCommentToPost } = useBlogContext();

  const handleSubmit = (
    values: FieldValues,
    { resetForm }: FormikHelpers<FieldValues>
  ) => {
    addCommentToPost(id, values);
    resetForm();
  };

  return (
    <Box mb={5}>
      <Formik
        initialValues={{ [text]: '', [name]: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Field
                  as={TextField}
                  fullWidth
                  name={text}
                  placeholder="Comment"
                  error={touched[text] && !!errors[text]}
                  helperText={<ErrorMessage name={text} />}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  as={TextField}
                  fullWidth
                  name={name}
                  placeholder="Name"
                  error={touched[name] && !!errors[name]}
                  helperText={<ErrorMessage name={name} />}
                />
              </Grid>
            </Grid>
            <Box mt={1.5} textAlign="end">
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
