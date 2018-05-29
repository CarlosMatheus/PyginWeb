from django.contrib.auth import authenticate, login
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm
from django.views.generic import CreateView, TemplateView, View, FormView


class RegisterView(CreateView):
    template_name = 'register.html'
    form_class = UserCreationForm
    success_url = '/editor/'

    def form_valid(self, form):
        valid = super(RegisterView, self).form_valid(form)
        username, password = (form.cleaned_data.get('username'),
                              form.cleaned_data.get('password1'))
        new_user = authenticate(username=username, password=password)
        login(self.request, new_user)
        return valid
