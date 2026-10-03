export default function Submission({ data, onClear }) {
  if (!data) {
    return <p className="muted">Nothing yet. Fill in the form above and save your details to see them here.</p>
  }

  return (
    <div>
      <dl className="details">
        <div>
          <dt>Name</dt>
          <dd>{data.name}</dd>
        </div>
        <div>
          <dt>Email</dt>
          <dd>{data.email}</dd>
        </div>
        <div>
          <dt>Saved at</dt>
          <dd>{data.submittedAt}</dd>
        </div>
      </dl>
      <button type="button" className="btn btn-ghost" onClick={onClear}>
        Clear details
      </button>
    </div>
  )
}
