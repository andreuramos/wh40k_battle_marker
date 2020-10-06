import Objective from "./Objective";

class ObjectiveBuilder
{
    static fromJson(data) //maybe this should be a class
    {
        return new Objective(
            data['name'],
            data['key'],
            data['description'],
            data['type'],
            data['category']
        );
    }
}

export default ObjectiveBuilder;