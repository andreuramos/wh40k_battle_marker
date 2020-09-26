import Objective from "./Objective";

class ObjectiveBuilder
{
    static fromJson(data) //maybe this should be a class
    {
        let objective = new Objective(
            data['name']
        )
        return objective;
    }
}

export default ObjectiveBuilder;