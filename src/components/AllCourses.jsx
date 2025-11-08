import { Button, Container, Table } from "react-bootstrap"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const AllCourses = () => {
    const url = import.meta.env.VITE_API_BASE_URL
    const [courses, setCourse] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {

        const getCourses = async () => {
            setIsLoading(true)
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`getCourses fail`)
                }

                let result = await response.json()
                result = result.filter(x => !x.isCompleted)

                console.log(result);
                setCourse(result); // Set data vào state
            } catch (error) {
                throw new Error(`getCourses fail ${error}`)
            } finally {
                setIsLoading(false)
            }
        }
        getCourses();
    }, [])

    if (isLoading) return (
        <div className="text-center">
            Loading ...
        </div>
    )

    return (
        <>
            <Container className="mt-4">
                <div className="d-flex justify-content-between">
                    <h1>All Courses</h1>
                    <Button style={{ width: `100px`, height: `50px`, marginTop: `10px` }}>
                        Add
                    </Button>
                </div>
                <Table striped hover bordered>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Image</th>
                            <th>Title </th>
                            <th>Level</th>
                            <th>Estimated Time</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!isLoading && courses.map((course, index) => {
                            return (
                                <tr key={index}>
                                    <td>{course.id}</td>
                                    <td style={{ width: '100px' }}>
                                        <img className="img-thumbnail"
                                            src={course.lessonImage}
                                            alt={course.lessonTitle}
                                            style={{
                                                width: '80px',
                                                height: '80px',
                                                objectFit: 'cover',
                                                borderRadius: '4px'
                                            }}
                                        />

                                    </td>
                                    <td>
                                        <Link to={`/se151037/lessons/${course.id}`}>
                                            {course.lessonTitle}
                                        </Link>
                                    </td>
                                    <td>{course.level}</td>
                                    <td>{course.estimatedTime}</td>
                                    <td>
                                        <div className="d-flex flex-col">
                                            <Button className="mx-1">
                                                Edit
                                            </Button>
                                            <Button className="mx-1">
                                                Delete
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>


                </Table>
            </Container>
        </>
    )
}

export default AllCourses;