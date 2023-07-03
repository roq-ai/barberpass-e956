import * as yup from 'yup';

export const appointmentValidationSchema = yup.object().shape({
  date: yup.date().required(),
  time: yup.date().required(),
  user_id: yup.string().nullable(),
  barbershop_id: yup.string().nullable(),
});
