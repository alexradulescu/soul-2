import { Demo } from "./Demo";

export const App = () => {
  return (
    <main>
      <h1>SOUL css</h1>
      <p>
        A simple class-less css starter with lots of SOUL to make the basic web
        look better
      </p>
      <aside>
        <dl>
          <dt>Simple</dt>
          <dd>
            Targeting only default browser elements while leaving the rest to
            your imagination
          </dd>
        </dl>
        <dl>
          <dt>Elegant</dt>
          <dd>Elegant yet modern new defaults using css latest tech</dd>
        </dl>
        <dl>
          <dt>Expandable</dt>
          <dd>
            Easy to expand and always out of your way when combining with other
            brameworks
          </dd>
        </dl>
      </aside>
      <nav>
        <a href="#">Use & Download</a>&nbsp;
        <a href="#">Components</a>&nbsp;
        <a href="#">Examples</a>
      </nav>

      <section>
        <h2>Components overview</h2>
        <Demo />
        <div className="card">
          <div className="card">
            <div className="card">Aloha</div>
          </div>
        </div>
      </section>
      <h2>Examples</h2>
      <article>
        <h1 className="title">
          Alice’s Adventure in Wonderland
          <br />
          <small className="author">by Lewis Carroll</small>{" "}
        </h1>
        <h2 className="chaper">Chapter 1</h2>{" "}
        <h3 className="chaper-name">Down the Rabbit-Hole</h3>
        <p>
          Alice was beginning to get very tired of sitting by her sister on the
          bank, and of having nothing to do. Once or twice she had peeped into
          the book her sister was reading, but it had no pictures or
          conversations in it, “and what is the use of a book,” thought Alice,
          “without pictures or conversations?”
        </p>
        <p>
          So she was considering in her own mind (as well as she could, for the
          day made her feel very sleepy and stupid), whether the pleasure of
          making a daisy-chain would be worth the trouble of getting up and
          picking the daisies, when suddenly a White Rabbit with pink eyes ran
          close by her.
        </p>
        <p>
          There was nothing so very remarkable in that, nor did Alice think it
          so very much out of the way to hear the Rabbit say to itself, “Oh
          dear! Oh dear! I shall be too late!” But when the Rabbit actually took
          a watch out of its waistcoat-pocket and looked at it and then hurried
          on, Alice started to her feet, for it flashed across her mind that she
          had never before seen a rabbit with either a waistcoat-pocket, or a
          watch to take out of it, and, burning with curiosity, she ran across
          the field after it and was just in time to see it pop down a large
          rabbit-hole, under the hedge. In another moment, down went Alice after
          it!
        </p>
        <p>
          The rabbit-hole went straight on like a tunnel for some way and then
          dipped suddenly down, so suddenly that Alice had not a moment to think
          about stopping herself before she found herself falling down what
          seemed to be a very deep well.
        </p>
        <p>
          Either the well was very deep, or she fell very slowly, for she had
          plenty of time, as she went down, to look about her. First, she tried
          to make out what she was coming to, but it was too dark to see
          anything; then she looked at the sides of the well and noticed that
          they were filled with cupboards and book-shelves; here and there she
          saw maps and pictures hung upon pegs. She took down a jar from one of
          the shelves as she passed. It was labeled “ORANGE MARMALADE,” but, to
          her great disappointment, it was empty; she did not like to drop the
          jar, so managed to put it into one of the cupboards as she fell past
          it.
        </p>
        <p>
          Down, down, down! Would the fall never come to an end? There was
          nothing else to do, so Alice soon began talking to herself. “Dinah’ll
          miss me very much to-night, I should think!” (Dinah was the cat.) “I
          hope they’ll remember her saucer of milk at tea-time. Dinah, my dear,
          I wish you were down here with me!” Alice felt that she was dozing
          off, when suddenly, thump! thump! down she came upon a heap of sticks
          and dry leaves, and the fall was over.
        </p>
        <p>
          <em>
            Text preview from{" "}
            <a href="https://www.gutenberg.org/ebooks/11">Project Gutenberg</a>.
          </em>
        </p>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Worth</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Anna Anstasia</th>
              <td style={{ textAlign: "right" }}>27</td>
              <td style={{ textAlign: "right" }}>1,534,798</td>
            </tr>
            <tr>
              <th>Benjamin Braham</th>
              <td style={{ textAlign: "right" }}>29</td>
              <td style={{ textAlign: "right" }}>7,000,000.23</td>
            </tr>
            <tr>
              <th>Mark Manson</th>
              <td style={{ textAlign: "right" }}>40</td>
              <td style={{ textAlign: "right" }}>833,777</td>
            </tr>
            <tr>
              <th>Julie Johansen</th>
              <td style={{ textAlign: "right" }}>22</td>
              <td style={{ textAlign: "right" }}>100,000</td>
            </tr>
          </tbody>
        </table>
        <aside>
          <dl>
            <dt>LINK</dt>
            <dd>Chainlink</dd>
          </dl>
          <dl>
            <dt>BTC</dt>
            <dd>Bitcoin</dd>
          </dl>
          <dl>
            <dt>ETH</dt>
            <dd>Ethereum</dd>
          </dl>
        </aside>
        <aside>
          <dl>
            <dd>24h Volume</dd>
            <dt>1,300,000.0000</dt>
          </dl>
          <dl>
            <dd>24h change</dd>
            <dt>+10.00%</dt>
          </dl>
          <dl>
            <dd>YTD</dd>
            <dt>19,300,000.0000</dt>
          </dl>
        </aside>
      </article>
    </main>
  );
};
