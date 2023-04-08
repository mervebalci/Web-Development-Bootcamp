import prisma from 'lib/prisma'

export default function DogImage({ cars, car }) {
    return (
        <div>
            <h1>{cars}</h1>
            <p>{car}</p>
        </div>
    )
}
  
export async function getServerSideProps() {
    // To retrieve all the cars in the database:
    const cars = await prisma.car.findMany()
    // console.log(cars)

    
    // To filter the data:
    const specificBrand = await prisma.car.findMany({
        where: {
            brand: 'Toyota'
        }
    })


    // To look for a single car by its id value:
    const specificCar = await prisma.car.findUnique({
        where: {
            id: 4,
        },
    })


    // To add a new car:
    const addNewCar = await prisma.car.create({
        data: {
            brand: 'Subaru',
            model: 'Forrester',
        }
    })


    // To delete a car:
    await prisma.car.delete({
        where: {
            id: 23,
        }
    })


    // To update the data:
    await prisma.car.update({
        where: { id: 7 },
        data: {
            bought: true
        }
    })
    

    return {
        props: { 
                cars: JSON.stringify(cars),
                car: JSON.stringify(specificCar)
        }
    }
}