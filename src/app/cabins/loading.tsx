import Spinner from "../_components/Spinner"

export default function CabinsLoading() {
    return (
        <div className="grid items-center justify-center">
            <Spinner />
            <p>Loading Cabin data...</p>
        </div>
    )
}