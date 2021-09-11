import React from "react"
import styled from "styled-components"
import PtojectsIllustration from "../../images/projects-illustration.svg"
import Arrow from "../../images/arrow.svg"
import { graphql, useStaticQuery, navigate } from "gatsby"

const Section3 = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(content)/" } }
        sort: { fields: frontmatter___rank, order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              title
              summary
              tags
              slug
              image
            }
          }
        }
      }
    }
  `)

  return (
    <Container id="projects">
      <div className="wrapper">
        <div className="projects-text">
          <h1>PROJECTS</h1>
          <p>
            Here are some of my works. I made these to solve certain problems
            and others just for fun.
          </p>
        </div>
        <div className="img">
          <p>02</p>
        </div>
      </div>
      <div className="wrapper2">
        {data.allMarkdownRemark.edges.map((edge, i) => (
          <div className="project" key={i}>
            {(i + 1) % 2 !== 0 && (
              <StyledImg
                className="img"
                onClick={() => {
                  navigate(`projects/${edge.node.frontmatter.slug}`)
                }}
                bgurl={edge.node.frontmatter.image}
              ></StyledImg>
            )}
            <div className="text">
              <h2>{edge.node.frontmatter.title.toUpperCase()}</h2>
              <p>{edge.node.frontmatter.summary}</p>
              <section>
                {edge.node.frontmatter.tags.split(",").map((tag, i) => (
                  <span key={i}>#{tag}</span>
                ))}
              </section>
              <button
                onClick={() => {
                  navigate(`projects/${edge.node.frontmatter.slug}`)
                }}
                className="projects-btn"
              >
                Learn more
              </button>
            </div>
            {(i + 1) % 2 === 0 && (
              <StyledImg
                className="img"
                bgurl={edge.node.frontmatter.image}
              ></StyledImg>
            )}
          </div>
        ))}
      </div>
    </Container>
  )
}

const StyledImg = styled.div`
  border: 2px solid #444;
  position: relative;
  top: 10px;
  right: 10px;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 10px;
    left: 10px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url(${props => props.bgurl});
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 10px;
    left: 10px;
    background-color: #7555f599;
    transition: 0.3s;
  }

  &:hover::after {
    background-color: #7555f510;
  }

  @media (max-width: 750px) {
    height: 300px;
  }

  @media (max-width: 570px) {
    .img {
      height: 250px;
    }
  }
`

const Container = styled.div`
  width: 100%;
  color: #444;
  padding: 100px 150px 200px 150px;

  .wrapper {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    .projects-text {
      display: flex;
      flex-direction: column;
      align-items: start;

      h1 {
        font-size: 80px;
        position: relative;
        top: -50px;
        letter-spacing: 10px;

        &::before {
          content: "";
          position: absolute;
          width: 40%;
          height: 8px;
          background: #ffc200;
          bottom: 0;
          left: 0;
        }

        &::after {
          content: "";
          position: absolute;
          width: 70%;
          height: 8px;
          background: #ffc200;
          bottom: -50px;
          right: 0;
        }
      }

      p {
        margin-top: 70px;
        font-size: 22px;
        width: 390px;
        font-weight: 300;
      }
    }
    .img {
      width: 300px;
      height: 390px;
      background-color: #e6e6e6;
      background-image: url(${PtojectsIllustration});
      background-repeat: no-repeat;
      background-size: 200%;
      background-position: center;
      position: relative;
      top: -10px;
      right: 30px;

      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        bottom: -20px;
        left: -20px;
        border: 2px solid #444;
      }

      p {
        position: absolute;
        bottom: 30px;
        font-weight: 700;
        font-size: 100px;
        right: -30px;
      }
    }
  }

  .wrapper2 {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 150px 0px 100px 0;
    position: relative;

    .project {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 35px;
      margin-bottom: 130px;

      .text {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        transform: translateY(-20px);

        h2 {
          font-size: 60px;
          letter-spacing: 8px;
          position: relative;

          &::before {
            content: "";
            position: absolute;
            width: 90px;
            height: 8px;
            background: #7555f5;
            bottom: 0;
            right: 0;
          }
        }

        p {
          margin-top: 30px;
          font-weight: 300;
          font-size: 22px;
        }

        section {
          margin-top: 30px;
          display: flex;
          flex-wrap: wrap;

          span {
            margin: 0px 20px 20px 0px;
            padding: 3px 10px;
            background: #e6e6e6;
            border-radius: 5px;
          }
        }

        .projects-btn {
          font-size: 16px;
          position: relative;
          border: none;
          background: none;
          outline: none;
          cursor: pointer;
          overflow: hidden;
          border-radius: 200px;
          margin-top: 40px;
          width: 150px;
          height: 40px;
          text-align: left;
          padding-left: 20px;
          padding-right: 20px;
          background-image: url(${Arrow});
          background-size: 6%;
          background-repeat: no-repeat;
          background-position: 125px center;

          &::before {
            position: absolute;
            top: 0;
            left: 0px;
            content: "";
            width: 40px;
            height: 40px;
            border-radius: 100%;
            background: #7555f550;
            transition: 0.4s;
          }

          &:hover::before {
            transform: scale(10);
          }
        }
      }
    }
  }

  @media (max-width: 1194px) {
    padding: 100px 50px;

    .wrapper {
      justify-content: center;
      .img {
        margin-left: 100px;
        right: 30px;
        p {
          font-size: 80px;
          right: -30px;
        }
      }

      .projects-text {
        z-index: 2;
        h1 {
          font-size: 80px;
        }
      }
    }

    .wrapper2 {
      .project {
        .text {
          h2 {
            font-size: 50px;
          }
          p {
            font-size: 22px;
          }
        }
      }
    }
  }

  @media (max-width: 950px) {
    .wrapper {
      .projects-text {
        h1 {
          top: 0;
          font-size: 40px;

          &::after,
          &::before {
            height: 4px;
          }

          &::before {
            bottom: -20px;
          }

          &::after {
            bottom: -40px;
          }
        }
        p {
          width: 300px;
          font-size: 20px;
        }
      }
      .img {
        width: 250px;
        height: 310px;
        p {
          font-size: 40px;
        }
      }
    }

    .wrapper2 {
      .project {
        .text {
          h2 {
            font-size: 26px;
            &::before {
              height: 4px;
            }
          }
          p {
            font-size: 20px;
          }
        }
      }
    }
  }

  @media (max-width: 750px) {
    .wrapper {
      padding: 0 30px;
      flex-wrap: wrap-reverse;
      .projects-text {
        width: 100%;
        p {
          width: 100%;
        }
      }

      .img {
        width: 100%;
        margin-left: 50px;
        margin-bottom: 100px;
        height: 400px;
        background-size: 150%;
      }
    }

    .wrapper2 {
      .project {
        padding: 0px 30px 0px 30px;
        // grid-template-columns:100%;
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        margin-bottom: 50px;

        .img {
          width: 100%;
        }

        .text {
          margin-top: 50px;
        }

        section {
          display: flex;
          flex-wrap: wrap;
        }
      }
      .project:nth-child(even) {
        flex-wrap: wrap-reverse;
      }
    }
  }

  @media (max-width: 570px) {
    padding: 0px 30px 200px 30px;
    .wrapper {
      .img {
        width: 90%;
        height: 250px;
      }
      padding: 0;
    }
    .wrapper2 {
      .project {
        padding: 40px 0px 0px 0px;
      }
    }
  }
`

export default Section3
