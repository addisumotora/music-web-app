import styled from "@emotion/styled";
const MusicContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 80%;
  height: 100vh;
  overflow-y: auto;
  padding: 0 20px;

  &::-webkit-scrollbar {
    display: hidden;
    width: 0;
  }
`;
const CategoryContainer = styled.div`
  width: 100%;
`;

const Card = styled.div`
  background-color: #14252f;
  border-radius: 0.5rem;
  padding: 15px;
  max-width: 20vh;
`;

const Header = styled.div``;
const CardHeader = styled.div`
  width: 100%;
`;
const Image = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
`;
const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 20px 0;
`;

const MusicList = () => {
  return (
    <MusicContainer>
      <Header></Header>
      <CategoryContainer>
        <CardHeader>
          <h2>Discover</h2>
          <p>Explore sonic realms with our Discover feature.</p>
        </CardHeader>
        <CardContainer>
          <Card>
            <Image src="./images/logo3.png" />
            <p>title</p>
            <p>genre</p>
          </Card>
          <Card>
            <Image src="./images/logo3.png" />
            <p>title</p>
            <p>genre</p>
          </Card>
          <Card>
            <Image src="./images/logo3.png" />
            <p>title</p>
            <p>genre</p>
          </Card>
          <Card>
            <Image src="./images/logo3.png" />
            <p>title</p>
            <p>genre</p>
          </Card>
          <Card>
            <Image src="./images/logo3.png" />
            <p>title</p>
            <p>genre</p>
          </Card>
        </CardContainer>
      </CategoryContainer>
      <CategoryContainer>
        <CardHeader>
          <h2>New Releases</h2>
          <p>Explore sonic realms with our Discover feature.</p>
        </CardHeader>
        <CardContainer>
          <Card>
            <Image src="./images/logo3.png" />
            <p>title</p>
            <p>genre</p>
          </Card>
          <Card>
            <Image src="./images/logo3.png" />
            <p>title</p>
            <p>genre</p>
          </Card>
          <Card>
            <Image src="./images/logo3.png" />
            <p>title</p>
            <p>genre</p>
          </Card>
          <Card>
            <Image src="./images/logo3.png" />
            <p>title</p>
            <p>genre</p>
          </Card>
          <Card>
            <Image src="./images/logo3.png" />
            <p>title</p>
            <p>genre</p>
          </Card>
        </CardContainer>
      </CategoryContainer>
    </MusicContainer>
  );
};

export default MusicList;
