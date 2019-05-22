import React from "react";
import { Container } from "reactstrap";

const IMG_SIZE = 100;
/**
 * column for every package
 */
const Blurps = ({ blurps }) => {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  const flexGoodForIOS = isIOS ? "1 0 auto" : 1;
  const BLURP_WIDTH = 200;
  return (
    <Container>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          width: "100%"
        }}
      >
        {blurps.map(item => (
          <div
            style={{
              margin: 10,
              padding: 10,
              width: BLURP_WIDTH,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flex: flexGoodForIOS
            }}
          >
            <div
              style={{
                width: BLURP_WIDTH,
                height: IMG_SIZE,
                justifyContent: "center",
                display: "flex",
                borderRadius: IMG_SIZE / 2
              }}
            >
              <div
                style={{
                  width: IMG_SIZE,
                  height: IMG_SIZE,
                  backgroundColor: "#CCC",
                  borderRadius: IMG_SIZE / 2
                }}
              >
                <img
                  alt={item.title}
                  src={item.image}
                  style={{
                    alignSelf: "center",
                    width: IMG_SIZE,
                    height: IMG_SIZE,
                    borderRadius: IMG_SIZE / 2
                  }}
                />
              </div>
            </div>

            <p style={{ textAlign: "center", width: BLURP_WIDTH }}>
              <b>{item.title}</b>
            </p>
            <p style={{ textAlign: "center", width: BLURP_WIDTH, marginTop: -25 }}>
              {item.subtitle}
            </p>

            <p style={{ textAlign: "center", width: BLURP_WIDTH }}>
              <i>{item.text}</i>
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Blurps;
