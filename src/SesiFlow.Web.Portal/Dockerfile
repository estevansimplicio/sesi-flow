FROM mcr.microsoft.com/dotnet/aspnet:3.1 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:3.1 AS build
WORKDIR /src
COPY ["src/SesiFlow.Web.Portal/SesiFlow.Web.Portal.csproj", "src/SesiFlow.Web.Portal/"]
RUN dotnet restore "src/SesiFlow.Web.Portal/SesiFlow.Web.Portal.csproj"
COPY . .
WORKDIR "/src/src/SesiFlow.Web.Portal"
RUN dotnet build "SesiFlow.Web.Portal.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "SesiFlow.Web.Portal.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "SesiFlow.Web.Portal.dll"]