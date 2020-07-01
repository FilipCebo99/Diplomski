using FluentValidation;

namespace Application.Validators
{
    public static class ValiadtorExtensions
    {
        public static IRuleBuilder<T, string> Password<T>(this IRuleBuilder<T, string> ruleBuilder)
        {
            var options = ruleBuilder
            .NotEmpty()
            .MinimumLength(6).WithMessage("Password must be at least 6 characters")
            .Matches("[A-Z]").WithMessage("Password mush contain 1 uppercase lette")
            .Matches("[a-z]").WithMessage("Password must have at least 1 lowercase characters")
            .Matches("[0-9]").WithMessage("Password must contain number")
            .Matches("[^a-zA-Z0-9]").WithMessage("Password must contain non alphanumeric");

            return options;

        }
    }
}