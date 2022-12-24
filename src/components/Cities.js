import React from 'react';
import Table from 'react-bootstrap/Table';
const Cities = (data) => {
  const dataObj = Object.entries(data.data);
  return (
    <Table striped bordered hover className="mt-3 w-10">
      <tbody>
        {dataObj.map((data) => (
          <tr>
            <th>{data[0]}</th> <td>{data[1]}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Cities;
