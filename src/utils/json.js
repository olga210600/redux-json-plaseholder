import React from 'react';
import styled from 'styled-components'


const Wrapper = styled.div`
  width: 300px;
  height: 100%;
  border: solid 1px black;
  margin: 20px;
`

const Title = styled.div`
  font-weight: bold;
`

const Json = ({text, title}) => {
    return (
        <div>
            <Wrapper >
                <Title>{title}</Title>
                <span >{text}</span>
                <button>Edit</button>
                <button>Delete</button>

            </Wrapper>

        </div>

    );
};

export default Json;
