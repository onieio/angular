System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CourseService, AuthorService;
    return {
        setters:[],
        execute: function() {
            CourseService = (function () {
                function CourseService() {
                }
                CourseService.prototype.getCourses = function () {
                    return ["Course1", "Course2", "Course3"];
                };
                return CourseService;
            }());
            exports_1("CourseService", CourseService);
            AuthorService = (function () {
                function AuthorService() {
                }
                AuthorService.prototype.getauthor = function () {
                    return ["Author1", "Author2", "Author3"];
                };
                return AuthorService;
            }());
            exports_1("AuthorService", AuthorService);
        }
    }
});
//# sourceMappingURL=course.service.js.map