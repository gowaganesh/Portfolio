import { Container } from '@mui/material';
import { PropsWithChildren } from 'react';

const AppContainer = (props: PropsWithChildren) => {
  return (
    <Container
      sx={{
        py: { xs: 3, sm: 6 }, 
        p : {xs : 2}
      }}
    >
      {props.children}
    </Container>
  );
};

export default AppContainer;
