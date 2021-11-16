const UniqueFeatures = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col justify-around items-center">
          <ImageDiv></ImageDiv>
          <Img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default UniqueFeatures;

const ImageDiv = styled.div`
  background-position: center;
  background-image: radial-gradient(
    circle,
    #fcecf1,
    #fcecf1 66%,
    transparent 66%
  );
  width: 21rem;
  height: 21rem;
  display: flex;
  align-self: center;
  position: relative;
  top: 15rem;
`;

const Img = styled.img`
  width: 77%;
  position: relative;
  /* bottom: 9rem; */
`;
