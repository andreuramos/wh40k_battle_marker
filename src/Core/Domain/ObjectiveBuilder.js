import Objective from "./Objective";

class ObjectiveBuilder
{
    static fromJson(data) //maybe this should be a class
    {
        return new Objective(
            data['name'],
            data['description']
        );
    }
}

export default ObjectiveBuilder;