function Info({ id, title, coverImg }) {
  return (
    <div>
      <h1>{title}</h1>
      <img src={coverImg} />
    </div>
  );
}

export default Info;
