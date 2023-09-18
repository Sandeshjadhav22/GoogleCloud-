import React from 'react';
import "./Table.css";

const Table = () => {
  return (
    <div>
        <div class="tableinfo">
        <table>
            <thead class="thead">
                <tr>
                    <th class="thclass">Sr.No</th>
                    <th class="thclass">Name</th>
                    <th class="thclass">Due Date</th>
                    <th class="thclass">Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="tdclass">1</td>
                    <td class="tdclass">Manas Kulkarni</td>
                    <td class="tdclass">18/10/23</td>
                    <td class="tdclass"> <p className="status notcompleted">Not completed</p></td>
                </tr>
                <tr>
                    <td class="tdclass">2</td>
                    <td class="tdclass">Sandesh Jadhav</td>
                    <td class="tdclass">18/10/23</td>
                    <td class="tdclass"> <p className="status completed">completed</p></td>
                </tr>
                <tr>
                    <td class="tdclass">3</td>
                    <td class="tdclass">Viraj sharma</td>
                    <td class="tdclass">18/10/23</td>
                    <td class="tdclass"> <p className="status completed">completed</p></td>
                </tr>
                <tr>
                    <td class="tdclass">4</td>
                    <td class="tdclass">Rohit Koli</td>
                    <td class="tdclass">18/10/23</td>
                    <td class="tdclass"> <p className="status notcompleted">Not completed</p></td>
                </tr>
                <tr>
                    <td class="tdclass">5</td>
                    <td class="tdclass">Akkash Chopra</td>
                    <td class="tdclass">18/10/23</td>
                    <td class="tdclass">  <p className="status notcompleted">Not completed</p></td>
                </tr>
            </tbody>
        </table>
        </div>
        
    </div>
  )
}

export default Table;




