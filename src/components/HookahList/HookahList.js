import hookahs from '../../hookahs'
import HookahItem from '../HookahItem'

const HookahList = ({ passableBrand }) => {
    return (
        <>
            {hookahs.map(
                ({ brand, flavor, picture, available }) => {
                if (!available || brand !== passableBrand) return null

                return (
                    <HookahItem
                        flavor={flavor}
                        picture={picture}
                    />
                )
                }
            )}
        </>
    )
}

export default HookahList
