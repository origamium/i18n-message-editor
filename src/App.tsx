import React from "react";
import styled from "styled-components";

const Styled = {
    Body: styled.main`
        min-height: 100vh;
    `
};

export const App: React.FC = () => {
    return <Styled.Body>{"はい"}</Styled.Body>;
};
