import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: rgb(0, 0, 0); /* The Fallback */
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  margin-top: 5%;
  padding-top: 2%;
  padding-bottom: 2%;
  min-height: 50vh;
`;

class Feature3 extends Component {
  render() {
    return (
      <Wrapper>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis elit
          neque. Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Maecenas tincidunt, turpis a consequat
          tristique, purus lacus imperdiet orci, id malesuada metus dui vel est.
          Etiam sapien mauris, sodales quis augue sed, ullamcorper consequat
          sem. Donec molestie lorem pretium nibh lacinia, at varius neque
          rhoncus. Curabitur finibus erat tortor, vel sagittis erat ornare
          posuere. Duis vitae dui ipsum. Nullam dignissim est elit, id iaculis
          ex molestie vitae. Integer nulla eros, cursus et vehicula eu, efficit
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis elit
          neque. Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Maecenas t ex molestie vitae. Integer nulla
          eros, cursus et vehicula eu, efficit
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis elit
          neque. Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Maecenas tincidunt, turpis a consequat sed,
          ullamcorper consequat sem. Donec molestie lorem pretium nibh lacinia,
          at varius neque rhoncus. Curabitur finibus erat tortor, vel sagittis
          erat ornare posuere. Duis vitae dui ipsum. Nullam dignissim est elit,
          id iaculis ex molestie vitae. Integer nulla eros, cursus et vehicula
          eu, efficit
        </p>
      </Wrapper>
    );
  }
}

export default Feature3;
