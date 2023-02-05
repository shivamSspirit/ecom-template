import { ColorRing } from 'react-loader-spinner'

const Loader = () => {
    return (
        <>
            <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#db570f', '#f56c42', '#f8b26a', '#914b36', '#917036']}
            />
        </>
    )
}

export default Loader