import "../../../styles/table.css";

export const Table = () => {
  return (
    <table>
      <tr>
        <th>Домен</th>
        <th>Число пользователей</th>
        <th>Аффинитивность</th>
      </tr>
      <tr>
        <td>34,5</td>
        <td>3,5</td>
        <td>36</td>
        <td>23</td>
      </tr>
      <tr>
        <td>35,5</td>
        <td>4</td>
        <td>36⅔</td>
        <td>23–23,5</td>
      </tr>
      <tr>
        <td>36</td>
        <td>4,5</td>
        <td>37⅓</td>
        <td>23,5</td>
      </tr>
    </table>
  );
};
