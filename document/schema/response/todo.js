module.exports = {
    successTodoById : {
        "status": "ok",
        "message": "success",
        "data": {
            "id": 1,
            "title": "Todo User A",
            "body": "This is todo user A",
            "updatedAt": "2022-10-18T02:01:39.871Z",
            "createdAt": "2022-10-18T02:01:39.871Z"
        }
    },
    successTodoByIdUpdate : {
        "status": "ok",
        "message": "success",
        "data": {
            "id": 1,
            "title": "Update Todo User A",
            "body": "This is todo user A after updating",
            "updatedAt": "2022-10-18T02:01:39.871Z",
            "createdAt": "2022-10-18T02:01:39.871Z"
        }
    },
    successTodoList : {
        "status": "ok",
        "message": "success",
        "data": [
            {
                "id": 2,
                "title": "Todo User B",
                "body": "This is todo user B",
                "updatedAt": "2022-10-18T02:01:39.871Z",
                "createdAt": "2022-10-18T02:01:39.871Z"
            },
            {
                "id": 1,
                "title": "Todo User A",
                "body": "This is todo user A",
                "updatedAt": "2022-10-18T02:01:39.871Z",
                "createdAt": "2022-10-18T02:01:39.871Z"
            }
        ],
    },

    successTodo : {
        "status": "ok",
        "message": "success",
    },

    todoExisting: {
        "status": "failed",
        "message": "todo is existing"
    },
    todoNotFound: {
        "status": "failed",
        "message": "todo not found"
    },
    unauthorized: {
        "status": "failed",
        "message": "unauthorized"
    },
}