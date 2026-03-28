
# Create a `PromptTemplate` class with:
# 1. `__init__` method that takes a template string
# 2. Attributes: template, variables (dictionary)
# 3. Methods:
#    - `set_variable(key, value)` - set a variable
#    - `get_variable(key)` - get a variable value
#    - `format()` - replace {variables} in template with values
#    - `reset()` - clear all variables
#    - `copy()` - create a copy of the template

# Test with multiple templates and variables.

class PromptTemplate:
    def __init__(self,template,variables=None):
        self.template = template
        self.variables = variables or {}

    def __str__(self):
        return f"Template: {self.template}"

    def set_variable(self,key,value):
        self.variables[key] = value

    def get_variable(self,key):
       if key in self.variables:
           return self.variables[key]
       else:
           print("Not found")
           return
       
    def format(self):
        try:
            # Python's built-in format handles {key} replacement automatically
            return self.template.format(**self.variables)
        except KeyError as e:
            return f"Missing variable: {e}"

    def reset(self):
        self.variables = {}

    def copy(self):
        return PromptTemplate(self.template, self.variables.copy())
    
template = PromptTemplate(
    "Generate a {type} about {topic} for {audience}."
)

template.set_variable("type", "blog post")
template.set_variable("topic", "Python programming")
template.set_variable("audience", "beginners")

prompt = template.format()
print(prompt)

copyPrompt = template.copy()

copyPrompt.set_variable("topic", "RAG")

print(f"copy: {copyPrompt.format()}")
print(f" {template.get_variable("topic")}")
template.reset()

print(template)