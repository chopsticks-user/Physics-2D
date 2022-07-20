#include <iostream>
#include <algorithm>
#include <cmath>
#include <random>
#include <map>
#include <utility>
#include <list>
#include <queue>
#include <stack>
#include <array>
#include <vector>
#include <string>
#include <chrono>
#include <memory>
#include <tuple>

namespace ulti
{

#define deb(x) cout << #x << " " << x << "\n"
#define fo(x, n) for (int x = 0; x < n; x++)
#define fok(x, k, n) for (int x = k; x < n; x++)
#define ifo(x, n) for (int x = n; x > 0; x--)
#define ifok(x, k, n) for (int x = n; x > k; x--)
#define foea(x, a) for (auto &x : a)

    const double PI = acos(-1);
    const double EU = exp(1.0);

    template <typename... T>
    void in(T &...args)
    {
        ((std::cin >> args), ...);
    }

    template <typename... T>
    void out(T... args)
    {
        ((std::cout << args << " "), ...);
    }

    unsigned long long rand(unsigned long long min, unsigned long long max)
    {
        std::random_device rd;
        std::mt19937 rng(rd());
        std::uniform_int_distribution<unsigned long long> dist(min, max);
        return dist(rng);
    }

    template <typename T>
    std::vector<T> i1d(const unsigned &n)
    {
        std::vector<T> a(n);
        for (auto &i : a)
        {
            std::cin >> i;
        }
        return a;
    }

    template <typename T>
    void o1d(const std::vector<T> &a)
    {
        for (auto &i : a)
        {
            std::cout << i;
        }
    }

    template <typename T>
    std::vector<std::vector<T>> i2d(const unsigned &n, const unsigned &m)
    {
        std::vector<std::vector<T>> a(n, std::vector<T>(m));
        for (auto &i : a)
        {
            for (auto &j : i)
            {
                std::cin >> j;
            }
        }
        return a;
    }

    template <typename T>
    std::vector<std::vector<T>> i2d(const unsigned &n, const unsigned &m, const T &x)
    {
        std::vector<std::vector<T>> a(n, std::vector<T>(m, x));
        return a;
    }

    template <typename T>
    void o2d(const std::vector<std::vector<T>> &a)
    {
        for (auto &i : a)
        {
            for (auto &j : i)
            {
                std::cout << j;
            }
        }
    }
}

using namespace std;
using namespace ulti;

void dp()
{
}

void solve()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    std::cout<<2;
}

int main()
{
    solve();
    return 0;
}