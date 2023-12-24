export default function GetStartedAccordion() {
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="acdn-1">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            #1 I need digital solution for my business where do I begin ?
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="acdn-1"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body lh-content">
            Placeholder content for this accordion, which is intended to
            demonstrate the <code>.accordion-flush</code> className. This is the
            first item's accordion body.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="acdn-2">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            #2 What is the best cloud solution for my business ?
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="acdn-2"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body lh-content">
            Placeholder content for this accordion, which is intended to
            demonstrate the <code>.accordion-flush</code> className. This is the
            second item's accordion body. Let's imagine this being filled with
            some actual content.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="acdn-3">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
          >
           #3 I need to scale my web and mobile applications
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="acdn-3"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body lh-content">
            Placeholder content for this accordion, which is intended to
            demonstrate the <code>.accordion-flush</code> className. This is the
            third item's accordion body. Nothing more exciting happening here in
            terms of content, but just filling up the space to make it look, at
            least at first glance, a bit more representative of how this would
            look in a real-world application.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="acdn-4">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#acdn-clps-4"
            aria-expanded="false"
            aria-controls="acdn-clps-4"
          >
           #4 I need dedicated software to manage my digital transactions
          </button>
        </h2>
        <div
          id="acdn-clps-4"
          className="accordion-collapse collapse"
          aria-labelledby="acdn-4"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body lh-content">
            Placeholder content for this accordion, which is intended to
            demonstrate the <code>.accordion-flush</code> className. This is the
            third item's accordion body. Nothing more exciting happening here in
            terms of content, but just filling up the space to make it look, at
            least at first glance, a bit more representative of how this would
            look in a real-world application.
          </div>
        </div>
      </div>
    </div>
  );
}
