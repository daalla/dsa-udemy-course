"""
Exercise URL: https://replit.com/@aneagoie/firstRecurringCharacter-exercise#index.js  # noqa: E501
"""
EXAMPLE_NUMBERS = [2, 5, 1, 2, 3, 5, 1, 2, 4]


def find_first_recurring_character(numbers):
    number_has_appeared = {}

    for number in numbers:
        if number in number_has_appeared:
            return number

        number_has_appeared[number] = True


first_recurring_character = find_first_recurring_character(EXAMPLE_NUMBERS)
