export const Demo = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Component</th>
          <td>Demo</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>H1</th>
          <td>
            <h1>Demo rocks</h1>
          </td>
        </tr>
        <tr>
          <th>Paragraph</th>
          <td>
            <p>Lorem ipsum dolor sid met</p>
          </td>
        </tr>
        <tr>
          <th>Link</th>
          <td>
            <a href="https://hapciu.com">Bullish rocks</a>
            <br />
            <a href="https://bullish.com">Bullish rocks</a>
            <br />
            <a>No Link</a>
          </td>
        </tr>
        <tr>
          <th>Button</th>
          <td>
            <button>Button rocks</button>
            <button type="submit">Submit rocks</button>
          </td>
        </tr>
        <tr>
          <th>Input</th>
          <td>
            <input type="text" placeholder="Hello?" />
          </td>
        </tr>
        <tr>
          <th>Description list</th>
          <td>
            <dl>
              <dt>LINK</dt>
              <dd>Chainlink</dd>
            </dl>
            <dl>
              <dd>24h Volume</dd>
              <dt>1,300,000.0000</dt>
            </dl>
          </td>
        </tr>
        <tr>
          <th>Details</th>
          <td>
            <details>
              <summary>Some summary/details can't hurt!</summary>{" "}
              <p>Lorem ipsum dolor sit blah blah.</p>{" "}
            </details>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
