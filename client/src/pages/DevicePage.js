import React from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'

const DevicePage = () => {

    const device = { id: 1, name: "12 pro", price: 34567, raiting: 0, img: "http://localhost:5000/76849c15-60de-4330-a729-10dbe82af735.jpg" }
    const description = [
        { id: 1, title: 'Оперативная память', description: '5 гб' },
        { id: 2, title: 'Камера', description: '12 мп' },
        { id: 3, title: 'Процессор', description: 'Пентиум 3' },
        { id: 4, title: 'Кол-во ядер', description: '2' },
        { id: 5, title: 'Аккумулятор', description: '4000' },
    ]

    return (
        <Container className="mt-3">
            <Row>


                <Col md={4}>
                    <Image width={300} height={300} src={device.img} />
                </Col>

                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                    </Row>
                </Col>

                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{ width: 300, height: 300, fontSize: 32, border: '5px solid lightgray' }}
                    >
                        <h3>{device.price} руб</h3>
                        <Button variant={"outline-dark"}>Добавить в корзину</Button>
                    </Card>
                </Col>

                <Col md={4}>

                </Col>
            </Row>

            <Row className="d-flex flex-column m-3">
                <h1>Характеристики</h1>
                {description.map((info, index) =>
                    <Row
                        key={info.id}
                        style={{ background: index % 2 === 0 ? 'lightgray' : 'transpare', padding: 10 }}
                    >
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    )
}

export default DevicePage
