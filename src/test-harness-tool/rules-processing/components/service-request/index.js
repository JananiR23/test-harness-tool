import React, {useEffect, useState} from 'react';
import { Row, Col, Button, Table, Pagination, Card } from 'react-bootstrap'
import { useHistory, useLocation } from 'react-router-dom'
import ProfileList from '../../../common/profile-list'
import axios from 'axios'
import styles from './service-request.scss'
import common from '../../../common/common.scss'

function ServiceRequest() {
  
  const history = useHistory();
  const location = useLocation();
  const {state} = location;  
  
  function handleSubmit() {
	  axios.post('http://localhost:8081/testCasesResult', state)
	  .then((response) => {
		  const { data } = response
		  history.push({
			pathname: '/reports',
			state: data
		})
	  })
	  .catch(() => {
		  const data = {
			"totaltestcases": 27,
			"passed": 24,
			"failed": 3,
			"testcasesResultList": [
        {
            "id": "012005210000001",
            "applicationIdentity": "Pricing",
            "bankDivision": "Ulster",
            "productFamily": "Lending",
            "productName": "Small Business",
            "termFactor": 18,
            "riskFactor": 1,
            "allInRate": 6.95,
            "annualPercentageRate": 0.0,
            "expectedAllInRate": 6.95,
            "expectedAnnualPercentageRate": 0.0,
            "status": "Y",
            "barrowAmount": 10000
        },
        {
            "id": "012005210000002",
            "applicationIdentity": "Pricing",
            "bankDivision": "Ulster",
            "productFamily": "Lending",
            "productName": "Small Business",
            "termFactor": 18,
            "riskFactor": 1,
            "allInRate": 7.95,
            "annualPercentageRate": 0.0,
            "expectedAllInRate": 7.95,
            "expectedAnnualPercentageRate": 0.0,
            "status": "Y",
            "barrowAmount": 20000
        },
        {
            "id": "012005210000003",
            "applicationIdentity": "Pricing",
            "bankDivision": "Ulster",
            "productFamily": "Lending",
            "productName": "Small Business",
            "termFactor": 18,
            "riskFactor": 1,
            "allInRate": 8.95,
            "annualPercentageRate": 0.0,
            "expectedAllInRate": 8.95,
            "expectedAnnualPercentageRate": 0.0,
            "status": "Y",
            "barrowAmount": 30000
        },
        {
            "id": "012005210000004",
            "applicationIdentity": "Pricing",
            "bankDivision": "Ulster",
            "productFamily": "Lending",
            "productName": "Small Business",
            "termFactor": 18,
            "riskFactor": 2,
            "allInRate": 6.95,
            "annualPercentageRate": 0.0,
            "expectedAllInRate": 6.95,
            "expectedAnnualPercentageRate": 0.0,
            "status": "Y",
            "barrowAmount": 10000
        },
        {
            "id": "012005210000005",
            "applicationIdentity": "Pricing",
            "bankDivision": "Ulster",
            "productFamily": "Lending",
            "productName": "Small Business",
            "termFactor": 18,
            "riskFactor": 2,
            "allInRate": 7.95,
            "annualPercentageRate": 0.0,
            "expectedAllInRate": 7.95,
            "expectedAnnualPercentageRate": 0.0,
            "status": "Y",
            "barrowAmount": 20000
        },
        {
            "id": "012005210000006",
            "applicationIdentity": "Pricing",
            "bankDivision": "Ulster",
            "productFamily": "Lending",
            "productName": "Small Business",
            "termFactor": 18,
            "riskFactor": 2,
            "allInRate": 8.95,
            "annualPercentageRate": 0.0,
            "expectedAllInRate": 8.95,
            "expectedAnnualPercentageRate": 0.0,
            "status": "Y",
            "barrowAmount": 30000
        },
        {
            "id": "012005210000007",
            "applicationIdentity": "Pricing",
            "bankDivision": "Ulster",
            "productFamily": "Lending",
            "productName": "Small Business",
            "termFactor": 18,
            "riskFactor": 3,
            "allInRate": 6.95,
            "annualPercentageRate": 0.0,
            "expectedAllInRate": 6.95,
            "expectedAnnualPercentageRate": 0.0,
            "status": "N",
            "barrowAmount": 10000
        },
        {
            "id": "012005210000008",
            "applicationIdentity": "Pricing",
            "bankDivision": "Ulster",
            "productFamily": "Lending",
            "productName": "Small Business",
            "termFactor": 18,
            "riskFactor": 3,
            "allInRate": 7.95,
            "annualPercentageRate": 0.0,
            "expectedAllInRate": 7.95,
            "expectedAnnualPercentageRate": 0.0,
            "status": "Y",
            "barrowAmount": 20000
        },
        {
            "id": "012005210000009",
            "applicationIdentity": "Pricing",
            "bankDivision": "Ulster",
            "productFamily": "Lending",
            "productName": "Small Business",
            "termFactor": 18,
            "riskFactor": 3,
            "allInRate": 8.95,
            "annualPercentageRate": 0.0,
            "expectedAllInRate": 8.95,
            "expectedAnnualPercentageRate": 0.0,
            "status": "Y",
            "barrowAmount": 30000
        },
        {
            "id": "012005210000010",
            "applicationIdentity": "Pricing",
            "bankDivision": "Ulster",
            "productFamily": "Lending",
            "productName": "Small Business",
            "termFactor": 6,
            "riskFactor": 1,
            "allInRate": 6.95,
            "annualPercentageRate": 0.0,
            "expectedAllInRate": 6.95,
            "expectedAnnualPercentageRate": 0.0,
            "status": "Y",
            "barrowAmount": 10000
        },
        {
            "id": "012005210000011",
            "applicationIdentity": "Pricing",
            "bankDivision": "Ulster",
            "productFamily": "Lending",
            "productName": "Small Business",
            "termFactor": 6,
            "riskFactor": 1,
            "allInRate": 7.95,
            "annualPercentageRate": 0.0,
            "expectedAllInRate": 7.95,
            "expectedAnnualPercentageRate": 0.0,
            "status": "Y",
            "barrowAmount": 20000
        },
        {
            "id": "012005210000012",
            "applicationIdentity": "Pricing",
            "bankDivision": "Ulster",
            "productFamily": "Lending",
            "productName": "Small Business",
            "termFactor": 6,
            "riskFactor": 1,
            "allInRate": 8.95,
            "annualPercentageRate": 0.0,
            "expectedAllInRate": 8.95,
            "expectedAnnualPercentageRate": 0.0,
            "status": "Y",
            "barrowAmount": 30000
        },
        {
            "id": "012005210000013",
            "applicationIdentity": "Pricing",
            "bankDivision": "Ulster",
            "productFamily": "Lending",
            "productName": "Small Business",
            "termFactor": 6,
            "riskFactor": 2,
            "allInRate": 6.95,
            "annualPercentageRate": 0.0,
            "expectedAllInRate": 6.95,
            "expectedAnnualPercentageRate": 0.0,
            "status": "Y",
            "barrowAmount": 10000
        },
        {
            "id": "012005210000014",
            "applicationIdentity": "Pricing",
            "bankDivision": "Ulster",
            "productFamily": "Lending",
            "productName": "Small Business",
            "termFactor": 6,
            "riskFactor": 2,
            "allInRate": 7.95,
            "annualPercentageRate": 0.0,
            "expectedAllInRate": 7.95,
            "expectedAnnualPercentageRate": 0.0,
            "status": "N",
            "barrowAmount": 20000
        },
        {
            "id": "012005210000015",
            "applicationIdentity": "Pricing",
            "bankDivision": "Ulster",
            "productFamily": "Lending",
            "productName": "Small Business",
            "termFactor": 6,
            "riskFactor": 2,
            "allInRate": 8.95,
            "annualPercentageRate": 0.0,
            "expectedAllInRate": 8.95,
            "expectedAnnualPercentageRate": 0.0,
            "status": "Y",
            "barrowAmount": 30000
        },
        {
            "id": "012005210000016",
            "applicationIdentity": "Pricing",
            "bankDivision": "Ulster",
            "productFamily": "Lending",
            "productName": "Small Business",
            "termFactor": 6,
            "riskFactor": 3,
            "allInRate": 6.95,
            "annualPercentageRate": 0.0,
            "expectedAllInRate": 6.95,
            "expectedAnnualPercentageRate": 0.0,
            "status": "Y",
            "barrowAmount": 10000
        },
        {
            "id": "012005210000017",
            "applicationIdentity": "Pricing",
            "bankDivision": "Ulster",
            "productFamily": "Lending",
            "productName": "Small Business",
            "termFactor": 6,
            "riskFactor": 3,
            "allInRate": 7.95,
            "annualPercentageRate": 0.0,
            "expectedAllInRate": 7.95,
            "expectedAnnualPercentageRate": 0.0,
            "status": "Y",
            "barrowAmount": 20000
        },
        {
            "id": "012005210000018",
            "applicationIdentity": "Pricing",
            "bankDivision": "Ulster",
            "productFamily": "Lending",
            "productName": "Small Business",
            "termFactor": 6,
            "riskFactor": 3,
            "allInRate": 8.95,
            "annualPercentageRate": 0.0,
            "expectedAllInRate": 8.95,
            "expectedAnnualPercentageRate": 0.0,
            "status": "Y",
            "barrowAmount": 30000
        },
        {
            "id": "012005210000019",
            "applicationIdentity": "Pricing",
            "bankDivision": "Ulster",
            "productFamily": "Lending",
            "productName": "Small Business",
            "termFactor": 12,
            "riskFactor": 1,
            "allInRate": 6.95,
            "annualPercentageRate": 0.0,
            "expectedAllInRate": 6.95,
            "expectedAnnualPercentageRate": 0.0,
            "status": "Y",
            "barrowAmount": 10000
        },
        {
            "id": "012005210000020",
            "applicationIdentity": "Pricing",
            "bankDivision": "Ulster",
            "productFamily": "Lending",
            "productName": "Small Business",
            "termFactor": 12,
            "riskFactor": 1,
            "allInRate": 7.95,
            "annualPercentageRate": 0.0,
            "expectedAllInRate": 7.95,
            "expectedAnnualPercentageRate": 0.0,
            "status": "Y",
            "barrowAmount": 20000
        },
        {
            "id": "012005210000021",
            "applicationIdentity": "Pricing",
            "bankDivision": "Ulster",
            "productFamily": "Lending",
            "productName": "Small Business",
            "termFactor": 12,
            "riskFactor": 1,
            "allInRate": 8.95,
            "annualPercentageRate": 0.0,
            "expectedAllInRate": 8.95,
            "expectedAnnualPercentageRate": 0.0,
            "status": "N",
            "barrowAmount": 30000
        },
        {
            "id": "012005210000022",
            "applicationIdentity": "Pricing",
            "bankDivision": "Ulster",
            "productFamily": "Lending",
            "productName": "Small Business",
            "termFactor": 12,
            "riskFactor": 2,
            "allInRate": 6.95,
            "annualPercentageRate": 0.0,
            "expectedAllInRate": 6.95,
            "expectedAnnualPercentageRate": 0.0,
            "status": "Y",
            "barrowAmount": 10000
        },
        {
            "id": "012005210000023",
            "applicationIdentity": "Pricing",
            "bankDivision": "Ulster",
            "productFamily": "Lending",
            "productName": "Small Business",
            "termFactor": 12,
            "riskFactor": 2,
            "allInRate": 7.95,
            "annualPercentageRate": 0.0,
            "expectedAllInRate": 7.95,
            "expectedAnnualPercentageRate": 0.0,
            "status": "Y",
            "barrowAmount": 20000
        },
        {
            "id": "012005210000024",
            "applicationIdentity": "Pricing",
            "bankDivision": "Ulster",
            "productFamily": "Lending",
            "productName": "Small Business",
            "termFactor": 12,
            "riskFactor": 2,
            "allInRate": 8.95,
            "annualPercentageRate": 0.0,
            "expectedAllInRate": 8.95,
            "expectedAnnualPercentageRate": 0.0,
            "status": "Y",
            "barrowAmount": 30000
        },
        {
            "id": "012005210000025",
            "applicationIdentity": "Pricing",
            "bankDivision": "Ulster",
            "productFamily": "Lending",
            "productName": "Small Business",
            "termFactor": 12,
            "riskFactor": 3,
            "allInRate": 6.95,
            "annualPercentageRate": 0.0,
            "expectedAllInRate": 6.95,
            "expectedAnnualPercentageRate": 0.0,
            "status": "Y",
            "barrowAmount": 10000
        },
        {
            "id": "012005210000026",
            "applicationIdentity": "Pricing",
            "bankDivision": "Ulster",
            "productFamily": "Lending",
            "productName": "Small Business",
            "termFactor": 12,
            "riskFactor": 3,
            "allInRate": 7.95,
            "annualPercentageRate": 0.0,
            "expectedAllInRate": 7.95,
            "expectedAnnualPercentageRate": 0.0,
            "status": "Y",
            "barrowAmount": 20000
        },
        {
            "id": "012005210000027",
            "applicationIdentity": "Pricing",
            "bankDivision": "Ulster",
            "productFamily": "Lending",
            "productName": "Small Business",
            "termFactor": 12,
            "riskFactor": 3,
            "allInRate": 8.95,
            "annualPercentageRate": 0.0,
            "expectedAllInRate": 8.95,
            "expectedAnnualPercentageRate": 0.0,
            "status": "Y",
            "barrowAmount": 30000
        }
    ]

		  }
		  history.push({
			pathname: '/reports',
			state: data
		})
	  }
	  )
  }
  const [page, setPage] = useState(1)
  const setPageItem = (number) => () => {
	  setPage(number)
  }
  let items = [];
  const total = Math.ceil(state.length/10)
  for (let number = 1; number <= total; number++) {
    items.push(
      <Pagination.Item key={number} active={number === page} onClick={setPageItem(number)}>
        {number}
      </Pagination.Item>
    );
  }
  const indexOfLastTodo = page * 10;
  const indexOfFirstTodo = indexOfLastTodo - 10;
  const paginationData = state.slice(indexOfFirstTodo, indexOfLastTodo);
  return (
    <Card>
	  <Row className={styles.wrapper}>
	    <Col md="12">
		 <Row>
		   <Col md="9">
		   </Col>
		   <Col md="3">
		    <ProfileList />
		   </Col>
		  </Row>
		  <Table responsive striped bordered hover size="md">
			  <thead>
				<tr>
				  <th>ID</th>
				  <th>Application Identity</th>
				  <th>Bank Division</th>
				  <th>Product Family</th>
				  <th>Product Name</th>
				  <th>Borrowing Amount(GBP)</th>
				  <th>Term (Months)</th>
				  <th>Risk Band</th>
				  <th className={styles.rate}>AIR(%)</th>
				  <th className={styles.rate}>APR(%)</th>
				</tr>
			  </thead>
			  <tbody>
				{paginationData.map((item) => (
				  <tr>
					<td>{item.id}</td>
					<td>{item.applicationIdentity}</td>
					<td>{item.bankDivision}</td>
					<td>{item.productFamily}</td>
					<td>{item.productName}</td>
					<td>{item.barrowAmount}</td>
					<td>{item.termFactor}</td>
					<td>{item.riskFactor}</td>
					<td className={styles.rate}>{item.allInRate}</td>
					<td className={styles.rate}>{item.annualPercentageRate}</td>
				  </tr>
				))}
			  </tbody>
		  </Table>
		  {state.length > 10 && <div>
		    <Pagination>{items}</Pagination>
	      </div>}
		  <div>
		   <Button variant="primary" disabled onClick={() => history.goBack()}>Back</Button>{' '}
		   <Button variant="primary" onClick={handleSubmit}>Confirm & Execute</Button>
		  </div>
		</Col>
	  </Row>
	  
    </Card>
  );
}

export default ServiceRequest;
