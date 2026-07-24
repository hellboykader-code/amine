import { FAQ } from "../data.js";

export default function Faq() {
  return (
    <section className="section section--alt" id="faq">
      <div className="container faq">
        <p className="section__eyebrow">FAQ</p>
        <h2 className="section__title">Questions fréquentes</h2>
        <div className="faq__list">
          {FAQ.map((f) => (
            <details className="faq__item" key={f.q}>
              <summary>{f.q}<span className="faq__plus">+</span></summary>
              <p>{f.r}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
