import styled from 'styled-components';

export const MainLayout = styled.div`
    padding:3rem;
    @media screen and (max-width:768px){
        padding:2rem;
    }
    @media screen and (max-width:600px){
        padding:3rem 1rem;
    }
`;

export const InnerLayout = styled.div`
    margin:3rem 0;
`;
