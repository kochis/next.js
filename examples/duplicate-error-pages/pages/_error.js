const Error = ({ statusCode }) => (
  <div>
    <h1>
      { statusCode === 404 ? "Page Not Found" : "Something went wrong" }
    </h1>

    { statusCode >= 500 &&
      <h3>
        Sorry for the inconvenience
      </h3>
    }
  </div>
)

Error.getInitialProps = ({ res, jsonPageRes }) => {
  const statusCode = res ? res.statusCode : (jsonPageRes ? jsonPageRes.status : null)
  return { statusCode }
}

export default Error
