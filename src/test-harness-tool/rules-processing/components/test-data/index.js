import React, {useEffect, useState} from 'react';
import { Row, Col, Button, Table, Spinner } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import styles from './test-data.scss'

function TestData() {
  
  const history = useHistory()
  const data = [{
	  "id": "10000",
	  "barrowAmount": "10000",
	  "riskFactor": 3,
	  "termFactor": 12
  },
  {
	  "id": "10001",
	  "barrowAmount": "10000",
	  "riskFactor": 3,
	  "termFactor": 12
  },
  {
	  "id": "10002",
	  "barrowAmount": "10000",
	  "riskFactor": 3,
	  "termFactor": 12
  }]
  
  const [state, setState] = useState([])
  
  useEffect(() => {
	  axios.get('http://dummy.restapiexample.com/api/v1/employees')
	  .then((response) => {
		  setState(data)
	  })
  }, [])
  return (
    <>
	  <Row>
		<Col md="6">
		  <Button variant="secondary" disabled className={styles.buttonAlignment}>View and Edit Test data in UI Grid</Button>{' '}
		  <Button variant="secondary" disabled className={styles.buttonAlignment}>Generate Test datasets and Save</Button>{' '}
		</Col>
		<Col md="6">
		  <div className={styles.box}>From Screen 1 - Capture the uploadedtest data in Excel & Allow user to view thesame data in UI Grid  which is Editable /Selectable for Service execution</div>
		</Col>
	  </Row>
	  <Row className={styles.padTop}>
	    <Col md="12">
		  <Table responsive>
			  <thead>
				<tr>
				  <th>ID</th>
				  <th>Barrow Amount</th>
				  <th>Risk Factor</th>
				  <th>Term Factor</th>
				</tr>
			  </thead>
			  <tbody>
				{state.map((item) => (
				  <tr>
					<td>{item.id}</td>
					<td>{item.barrowAmount}</td>
					<td>{item.riskFactor}</td>
					<td>{item.termFactor}</td>
				  </tr>
				))}
			  </tbody>
		  </Table>
		  {state.length === 0 &&
			<div className={styles.centerOne}>
				<Spinner animation="border" role="status">
				  <span className="sr-only">Loading...</span>
				</Spinner>
			</div>
		   }
		</Col>
	  </Row>
	  <Row className={styles.section}>
		<Col md="9">
		  <div><span>Integrate Automated Test Data Generation solution</span> - Under Construction</div>
		</Col>
		<Col md="3">
		  <Button variant="primary" onClick={() => history.goBack()}>Back</Button>{' '}
		  <Button variant="primary" onClick={() => history.push({
		pathname: '/rules-processing/service-request',
		state: 'service-request'
	})}>Next</Button>
		</Col>
	   </Row>
    </>
  );
}

export default TestData
;