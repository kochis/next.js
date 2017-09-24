const Index = () => (
  <div>
    <p>HOME PAGE is here!</p>
  </div>
)

Index.getInitialProps = () => {
  throw "Server Side Error"
  return {}
}

export default Index
