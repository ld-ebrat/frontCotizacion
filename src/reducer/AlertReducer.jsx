
export function AlertReducer(state, action) {
    switch (action.type) {
        case "error-visible":
            return {
                dataWarning: {
                    "color": "text-ebrat-err",
                    "text": action.dataWarning.text,
                    "move": "right-[20px]",
                }
            }
            break;
        case "error-hidden":
            return{
                dataWarning:{
                    "color": "text-ebrat-err",
                    "move": "-right-[600px]",
                    "text": action.dataWarning.text
                }
            }
            break
        case "success-visible":
            return {
                dataWarning:{
                    "color": "text-ebrat-success",
                    "move": "right-[20px]",
                    "text": action.dataWarning.text
                }
            }
            break;
        case "success-hidden":
            return{
                dataWarning:{
                    "color": "text-ebrat-success",
                    "move": "-right-[600px]",
                    "text": action.dataWarning.text
                }
            }
        default:
    }
}