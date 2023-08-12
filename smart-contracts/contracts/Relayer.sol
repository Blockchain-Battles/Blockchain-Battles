import "@openzeppelin/contracts/metatx/ERC2771Context.sol";
import "@openzeppelin/contracts/metatx/MinimalForwarder.sol";

contract Relayer is ERC2771Context {
    event LogSender(address sender);

    constructor(
        MinimalForwarder forwarder
    ) public ERC2771Context(address(forwarder)) {}

    function logMe() public {
        emit LogSender(_msgSender());
    }
}
