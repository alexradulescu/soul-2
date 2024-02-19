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
        </tr>{" "}
        <tr>
          <th>Input</th>
          <td>
            <input type="text" placeholder="Text" />
            <input type="password" placeholder="password" />
            <input type="search" placeholder="Search?" />
            <input type="email" placeholder="email" />
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
        <tr>
          <th colSpan={2}>Work in progress</th>
        </tr>
        <tr>
          <th>Input</th>
          <td>
            <input type="number" placeholder="123" />
            <input type="date" placeholder="Date" />
            <input type="file" placeholder="File" />
            <input type="tel" placeholder="tel?" />
            <input type="month" placeholder="month?" />
            <input type="week" placeholder="week?" />
            <input type="datetime-local" placeholder="datetime-local?" />
          </td>
        </tr>
        <tr>
          <th>Checkbox & radio</th>
          <td>
            <input type="checkbox" placeholder="Hello?" />
            <input type="radio" placeholder="Hello?" />
          </td>
        </tr>
        <tr>
          <th>Textarea</th>
          <td>
            <textarea placeholder="Hello?"></textarea>
          </td>
        </tr>
        <tr>
          <th>Select</th>
          <td>
            <select placeholder="Car?">
              <option>Tesla</option>
              <option>Volvo</option>
              <option>VW</option>
            </select>
            <select placeholder="Car?" multiple>
              <option>Tesla</option>
              <option>Volvo</option>
              <option>VW</option>
            </select>
          </td>
        </tr>
        <tr>
          <th>kbd</th>
          <td>
            <kbd>CTRL + E</kbd>
          </td>
        </tr>
        <tr>
          <th>Progress</th>
          <td>
            <progress max={100} value={50} />
            <br />
            <progress max={100} />
          </td>
        </tr>
      </tbody>
    </table>
  );
};
